import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import '@sass/pages/index.scoped.scss';

const mapStateToProps = (state) => ({
    state
});

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rides: [],
            page: 0,
            isEnd: false
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleScroll(e) {
        if (this.state.isEnd) {
            let scrollPosition = e.srcElement.scrollingElement.scrollTop + window.innerHeight;

            if (scrollPosition >= document.body.offsetHeight) {
                this.getData();
            }
        }
    }

    getData() {
        this.setState({
            page: ++this.state.page,
            isEnd: false
        }, () => {
            axios.get(`/api/ride?page=${this.state.page}`).then(res => {
                let resData = res.data.rides.data;
                let data = this.state.rides.concat(resData);

                if (resData.length < 10) {
                    window.removeEventListener('scroll', this.handleScroll);
                }

                this.setState({
                    rides: data,
                    isEnd: true
                });
            }).catch(err => {
                console.log(err);
            });
        });
    }

    componentDidMount() {
        this.getData();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        let rides = Array.from(this.state.rides);

        return (
            <main className="main">
                <article className="main-container">
                    <ul className="ride-list">
                        { rides.map((ride) => {
                            return (
                                <li key={ride.id}>
                                    <Link to={`/ride/${ride.id}`}>
                                        <span className="ride-attend">1명 참석</span>

                                        <div className="ride-header">
                                            <h2 className="ride-title">{ ride.name }</h2>
                                            <span className="ride-difficulty">{ ride.difficulty }</span>
                                        </div>

                                        <div className="ride-detail">
                                            <span>거리 { ride.distance }km</span>
                                            <span>출발시간 { ride.started_at }</span>
                                            <span>소요시간 3시간</span>
                                        </div>
                                        <div className="ride-address">
                                            <span>출발장소: { ride.address } { ride.address_detail }</span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </article>
            </main>
        );
    }
};

export default connect(mapStateToProps)(Home);
