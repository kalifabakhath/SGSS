import React, { Component } from 'react'
import {Control,LocalForm} from 'react-redux-form';
import {Label,Row,Col} from 'reactstrap';

export default class Food extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                 <div className="food">
                     <div className="foodcontent">
                      <h4 className="food-title col-md-auto">Food grievance</h4>
                      <LocalForm className="fform">
                         <Row className="form-group fp">
                           <Label htmlFor="foodplace">Food-Place :</Label>
                           <Col md={5}>
                                <Control.select model=".foodplace" id="foodplace" className="form-control">
                                    <option>Kore</option>
                                    <option>East Kore</option>
                                    <option>Vallalar Maiyyam</option>
                                    <option>Saradha Maiyyam</option>
                                    <option>K's Cafe(Boys-Hotel)</option>
                                    <option>K's Cafe(Girls-Hotel)</option>
                                    <option>Munch-Box</option>
                                    <option>CCD</option>
                                    <option>Nescafe</option>
                                </Control.select>
                           </Col>
                         </Row>
                         <Row  className="form-group fd">
                           <Label htmlFor="description">Description    :</Label>
                           <Col md={5} >
                             <Control.textarea rows={8} cols={8} model=".description" id="description" name="description" className="form-control" /><br/>
                           </Col>
                        </Row>
                        <Row className="form-group" id="fim">
                           <Label htmlFor="Image">Image :</Label>
                           <Col md={5} >
                             <Control.file  model=".image" id="image" name="image" className="form-control-file" /><br/>
                           </Col>
                        </Row>
                           <Control.button className="btn btn-info mb-4 fbut" model="user" > Submit</Control.button>
                     </LocalForm>
                 </div>
                 </div>
            </div>
        )
    }
}
