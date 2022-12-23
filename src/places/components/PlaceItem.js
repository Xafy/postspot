import React , {useState} from "react";

import Map from "../../shared/components/UIElements/Map";
// import MapOl from "../../shared/components/UIElements/Map";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import './PlaceItem.css'

const PlaceItem = props =>{

    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);    

    const [showConfirmDeleteModal, setConfirmDeleteModal] = useState(false) 
    const showDeleteHandler = () => setConfirmDeleteModal(true)
    const hideDeleteHandler = () => setConfirmDeleteModal(false)

    const confirmDeleteHandler = () =>{
        setConfirmDeleteModal(false)
        console.log('deleting')
    }

    return(
        <React.Fragment>
            <Modal
            show ={showMap}
            onCancel={closeMapHandler}
            header ={props.address}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>Close</Button>}
            >
                <div className="map-container">
                    <Map center={props.coordinates} zoom={16} />
                </div>
            </Modal>

            <Modal 
            show={showConfirmDeleteModal}
            header = 'Are you sure?'
            footerClass= 'place-item__modal-actions'
            footer={
                <React.Fragment>
                    <Button inverse onClick={hideDeleteHandler}>Cancel</Button>
                    <Button danger onClick={confirmDeleteHandler}>Delete</Button>
                </React.Fragment>
            }>
                This action can't be undone, do you want to proceed?
            </Modal>
            
        <li className="place-item">
            <Card className="place-item-content">
                <div className="place-item__image">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse onClick={openMapHandler}>View on map</Button>
                    <Button to={`/places/${props.id}`}>Edit</Button>
                    <Button danger onClick={showDeleteHandler} >Delete</Button>
                </div>
            </Card>
        </li>
        </React.Fragment>
        
        
    )
}

export default PlaceItem;