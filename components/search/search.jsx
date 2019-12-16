import React,{Component} from 'react';

const Search =() => {
    return(
        <div className="container">
            <div className="col-md-12">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="what u want.....search here"
                    onChange={props.Search}
                    />
                </div>
            </div>
        </div>
    )
    
};

export default Search;