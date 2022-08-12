// style the cards with the items in center

import './Menu.css'
const EleName = (props) => {

        return(
            <div>
                <h3>{props.name}</h3>   
            </div>
        );
};

var Pxl = "450X300";

const Rate = (props) => {
    return (
        <div>
            <p>{props.item}</p>
        </div>
    );
};

function Menu_Cards() {
    return (
        <div>
            <div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-top text-dark">
                                <img src="#" alt="450X300"></img>
                            </div>
                            <div className="card-title">
                                <EleName name='Fancy Product' />
                            </div>
                            <div className="card-text">
                                <Rate item='$40.00 - $80.00' />
                            </div>
                            <br />
                            
                            <br/>
                            <button className="btn">
                                View Options
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-top text-dark">
                                <img src="#" alt="450X300"></img><a className='badge'>Sale</a>
                            </div>
                            <div className="card-title">
                                <EleName name='Special Item' />
                            </div>
                            <div className="card-text">
                                <p><s>$20.00</s><Rate item='$18.00' /></p>
                            </div>
                            <div>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <button className="btn btn-primary">
                                View Options
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-top text-dark">
                                <img src="#" alt="450X300"></img><a className='badge'>Sale</a>
                            </div>
                            <div className="card-title">
                                <EleName name='Sale Item' />
                            </div>
                            <div className="card-text">
                                <p><s>$50.00</s><span><Rate item='$25.00' /></span></p>
                            </div>
                            <br />
                            <button className="btn">
                                View Options
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-top text-dark">
                                <img src="#" alt="450X300"></img>
                            </div>
                            <div className="card-title">
                                <EleName name='Popular Item' />
                            </div>
                            <div className="card-text">
                                <Rate item='$40.00' />
                            </div>
                            <div>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <br/>
                            <button className="btn">
                                View Options
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-top text-dark">
                                <img src="#" alt="450X300"></img><a className='badge'>Sale</a>
                            </div>
                            <div className="card-title">
                                <EleName name='Fancy Product' />
                            </div>
                            <div className="card-text">
                                <Rate item='$40.00 - $80.00' />
                            </div>
                            <br />
                            <br/>
                            <button className="btn">
                                View Options
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-top text-dark">
                                <img src="#" alt="450X300"></img>
                            </div>
                            <div className="card-title">
                                <EleName name='Special Item' />
                            </div>
                            <div className="card-text">
                                <Rate item='$18.00' />
                            </div>
                            <br />
                            <br/>
                            <button className="btn">
                                View Options
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-top text-dark">
                                <img src="#" alt="450X300"></img><a className='badge'>Sale</a>
                            </div>
                            <div className="card-title">
                                <EleName name='Sale Item' />
                            </div>
                            <div className="card-text">
                                <Rate item='$25.00' />
                            </div>
                            <div>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <br/>
                            <button className="btn">
                                View Options
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-img-top text-dark">
                                <img src="#" alt="450X300"></img>
                            </div>
                            <div className="card-title">
                                <EleName name='Popular Item' />
                            </div>
                            <div className="card-text">
                                <Rate item='$40.00' />
                            </div>
                            <div>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <br/>
                            <button className="btn">
                                View Options
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu_Cards;