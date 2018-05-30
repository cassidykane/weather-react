import React, { Component } from 'react';

class ZipForm extends Component {
    render() {
        return (
            <div class="zip-form">
                <form id="zipForm">
                    <div class="flex-parent">
                        <label htmlFor="zipcode">Zip</label>
                        <input className="form-control" type="input" id="zipcode" name="zipcode" value="" required/>
                        <button type="submit" class="btn btn-success"> Get the forcast!</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ZipForm;