import React from "react";

const Userdata =({info}) =>{
    return(
        <div className="container">
            <div className="row">
                {
                    info.map(item =>(
                        <div className="col-md-4">
                            <div class="card text-left">
                              <img class="card-img-top" src="holder.js/100px180/" alt="">
                              <div class="card-body">
                    <h4 class="card-title">{item.name}</h4>
                    <p class="card-text">{item.username}</p>
                              </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

Export default Userdata;