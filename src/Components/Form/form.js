import React, {useEffect, useState} from 'react';
import {Button, Col, FormGroup, Input, Label, Modal, ModalFooter, ModalHeader} from "reactstrap";

import {axiosRequest} from "../../axiosRequest";



const Form = (props) => {

        const input = {
            title: '',
            price: '',
            url: ''
    };
    const [value, setInput] = useState(input);

   const getDishes = async ()=>{
   const res = await  axiosRequest.get('dishes/'+props.id+'/.json');
  let dish = res.data;
       setInput(dish)
    };
    useEffect(()=>{
        if(props.id) {
            getDishes()
        }
    },[]);

    const chang = event => {
        setInput({...value, [event.target.name]: event.target.value})
    };
    const click = ()=>{
        props.request({...value}, props.id ? props.id : null);
        props.closed();

    };
    return (
        <div>
            <Modal isOpen={props.modal} modalTransition={{timeout: 700}} backdropTransition={{timeout: 1300}}
                   toggle={props.closed}>
                <ModalHeader toggle={props.closed}>Modal title</ModalHeader>
                <FormGroup row>
                    <Label className="pr-0" for="Text" sm={2}>Title</Label>
                    <Col sm={8} className="pl-0">
                        <Input defaultValue={value.title} onChange={chang} type="text" placeholder="title" name="title" id="Text" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="pr-0" for="number" sm={2}>price</Label>
                    <Col sm={8} className="pl-0">
                        <Input  defaultValue={value.price} onChange={chang} placeholder="price" type="number" name="price" id="number"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label className="pr-0" for="exampleText" sm={2}>Url</Label>
                    <Col sm={8} className="pl-0">
                        <Input defaultValue={value.url} onChange={chang} placeholder="url" type="text" name="url" id="exampleText"/>
                    </Col>
                </FormGroup>

                <ModalFooter>
                    <Button color="secondary" onClick={click} >Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Form;