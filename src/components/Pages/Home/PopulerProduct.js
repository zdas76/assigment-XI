import React from 'react';
import c1 from '../../../images/letest/1.jpg';
import c2 from '../../../images/letest/2.jpg';
import c3 from '../../../images/letest/3.jpg';


const PopulerProduct = () => {
    
    return (
        <section className='bg-light py-5'>
            <div className='container '>
                <h1 className='display-2 my-5 fw-bold'>Our Latest Collection</h1>
                <div className="row">
                    <div className="col-lg-4 my-3 my-lg-0">
                        <div className="card">
                            <img src={c1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold ">Rocking Chair</h5>
                                <p className="card-text"> BTD. 6650</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <div className="card">
                            <img src={c2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Classic Rocking Chair</h5>
                                <p className="card-text">BDT. 13500</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <div className="card">
                            <img src={c3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Sonnet</h5>
                                <p className="card-text">BDT. 6500</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-lg-4 my-3 my-lg-0">  <div className="card">
                        <img src={c1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fw-bold ">Rocking Chair</h5>
                            <p className="card-text"> BTD. 6650</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <div className="card">
                            <img src={c2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Classic Rocking Chair</h5>
                                <p className="card-text">BDT. 13500</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <div className="card">
                            <img src={c3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Sonnet</h5>
                                <p className="card-text">BDT. 6500</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        
    );
};

export default PopulerProduct;