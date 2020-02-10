import React, { Component } from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
 
import CreateFreight from './CreateFreight';
import EditFreightModal from './EditFreightModal';
import FreightList from './FreightList';



class FreightContainer extends Component {
    state = {
        products: [],
        createModalOpen: false,
        editModalOpen: false,
        productToEdit: {
            name: '',
            cost_of_load: '',
            trucking_company: '',
            bol_number: '',
            travel_days_required: '',
            estimated_date_arrival: '',
            point_of_contact: '',
            num_of_pallets: '',
            originating_port: '',
            recent_terminal: '',
            date_last_terminal: '',
            id: ''
        }
    }
    //function for createFreight
    createFreight = () => {
        this.setState({
            createModalOpen: true
        })
    }
    //function for addFreight
    addFreight = async (e, productFromTheForm) => {
        e.preventDefault();

        try{
            const createFreightResponse = await fetch(`http://localhost:8000/api/v1/products/`, {
                //method must match flask back-end create route 
                method: 'POST',
                body: JSON.stringify(productFromTheForm),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const parsedResponse = await createFreightResponse.json();
            
            this.setState({
                products: [...this.state.products, parsedResponse.data]
            })

            this.closeCreateModal()
        } catch (err) {
            console.log('error:', err)
        }
    }
    //function for closeCreateModal
    closeCreateModal = () => {
        this.setState({
            createModalOpen: false
        }, () => {
            this.createProductFormRef.current.clearForm();
        })
    }
    //function for componentDidMount
    //we only want to fetch data one time when the component mounts
    componentDidMount() {
        this.getFreight();
        console.log('componentDidMount')
    }
    //function for getFreight async request that returns a promise activated by fetch
    getFreight = async () => {
        try {
            const products = await fetch (`http://localhost:8000/api/v1/products/`, {
                credentials: 'include'
            });
            const parsedProducts = await products.json();

            this.setState({
                products: parsedProducts.data
            })
        } catch (err){
            console.log('error:', err)
        }
    }
    //function for editFreight
    editFreight = (idOfProductToEdit) => {
        const productToEdit = this.state.products.find(product => product.id === idOfProductToEdit)
        this.setState({
            editModalOpen: true,
            productToEdit: {
                ...productToEdit
            }
        })
    }
    //function for handleEditChange
    handleEditChange = (event) => {
        //implementation to state productToEdit
        this.setState({
            productToEdit: {
                ...this.state.productToEdit,
                [event.target.name]: event.target.value
            }
        })
    }
    //function for updateFreight async allows time to go to Flask back-end and return to render
    updateFreight = async (e) => {
        //avoid browser re-render with preventDefault() for the event
        e.preventDefault()
        //try catch for response 
        try{
            //await the async function hard code localhost and replace with ${process.env.REACT_APP_API_URL}
            const updateResponse = await fetch(`http://localhost:8000/api/v1/products/${this.state.productToEdit.id}`, {
                //method must match flask back-end update route 
                method: 'PUT',
                //payload will be returned from back-end as jsonify data
                body: JSON.stringify(this.state.productToEdit),
                headers: {
                    'Content-Type': 'application/json'
                },
                //this portion is more for authentication purpose to verify credentials from back-end allows update data
                credentials: 'include'
            })
            const updateResponseParsed = await updateResponse.json()
            //products are used as blueprint in Flask back-end and must be consistent when mapping through the each array element 
            const newFreightArrayWithUpdate = this.state.products.map((product) => {
                if(product.id === updateResponseParsed.data.id) {
                    product = updateResponseParsed.data
                }
                return product
            })
            //call this.setState inside 
            this.setState({
                products: newFreightArrayWithUpdate
            })

            this.closeEditModal()

        } catch (err) {
            console.log(err)
        }
    }
    //function for closeEditModal
    closeEditModal = () => {
        this.setState({
            editModalOpen: false
        })
    }
    //function for deleteFreight
    deleteFreight = async (id) => {
        const deleteFreightResponse = await fetch(`http://localhost:8000/api/v1/products/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        const deleteFreightParsed = await deleteFreightResponse.json();
        
        this.setState({
            products: this.state.products.filter((product) => product.id !== id)
        })
    }

    render() {
        return (
            <div className="FreightContainer">
                <Grid>
                <Grid.Row>
                    <Header className="freightTitle" size="large">Freight Tracking System</Header>
                </Grid.Row>
                    <Grid.Row>
                        <Button className="btn" onClick={this.createFreight}><i className="material-icons right">clouds</i>Create New Inbound Freight</Button>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <FreightList
                                products={this.state.products}
                                deleteFreight={this.deleteFreight}
                                editFreight={this.editFreight}
                            />
                        </Grid.Column>
                            <CreateFreight
                                open={this.state.createModalOpen}
                                closeModal={this.closeCreateModal}
                                addFreight={this.addFreight}
                                ref={this.createProductFormRef}
                            />
                            <EditFreightModal 
                                open={this.state.editModalOpen}
                                updateFreight={this.updateFreight}
                                productToEdit={this.state.productToEdit}
                                closeModal={this.closeEditModal}
                                handleEditChange={this.handleEditChange}
                            />
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default FreightContainer;