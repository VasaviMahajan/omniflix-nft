import React from 'react'

export const Card = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center mt-5 p-3 flex-column">
            <div className="d-flex justify-content-center align-items-center">
                <section className="border rounded p-4 py-5 shadow account">
                    <div>
                        <div className="card text-light bg-dark p-4" >
                            <p className="m-0 p-0">You have:</p>
                            <div className="d-flex">
                                <h3 className="fw-bold mt-1 wallet-amt"></h3>
                                <small className="fw-light mt-1 ms-1 py-2">Ethers</small>
                            </div>
                            <div className="mt-3">
                                <small className="bg-light text-muted p-2 px-3 rounded-pill actAddress"
                                ></small>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
