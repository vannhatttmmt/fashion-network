import React from 'react'

class Slide extends React.Component {
    render() {
        return (
            <div className="container slide-wrapper">
                <section className="col-md-8">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={this.props.vm.banner1[0].imageUrl}/>
                            </div>

                            <div className="item">
                                <img src={this.props.vm.banner1[1].imageUrl}/>
                            </div>
                            <div className="item">
                                <img src={this.props.vm.banner1[2].imageUrl}/>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <section className="col-md-4">
                    <div id="myCarousel-1" className="carousel slide" data-ride="carousel">

                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={this.props.vm.banner2[0].imageUrl}/>
                            </div>

                            <div className="item">
                                <img src={this.props.vm.banner2[1].imageUrl}/>
                            </div>
                            <div className="item">
                                <img src={this.props.vm.banner2[2].imageUrl}/>
                            </div>
                        </div>
                    </div>
                    <div id="myCarousel-2" className="carousel slide" data-ride="carousel">

                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={this.props.vm.banner3[0].imageUrl}/>
                            </div>

                            <div className="item">
                                <img src={this.props.vm.banner3[1].imageUrl}/>
                            </div>
                            <div className="item">
                                <img src={this.props.vm.banner3[2].imageUrl}/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Slide