import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from 'images/brand_logo_1.svg';

class Header extends Component {
    render() {
        let { Books } = this.props;
        // console.log(Books.length);

        return(
            <div>
                <nav className="navbar py-0">
                    <ul className="nav">
                        <Link to={'/'} className="navbar-brand">
                            <img src={Logo} alt={'brand logo'} className={'mr-2'}/>
                            {'Book Store'}
                        </Link>           
                    
                        <Link to={'/'} className="nav-link">
                            {'List'}
                        </Link>

                        <Link to={'/AddBooks'} className="nav-link">
                            {'Add New'}
                        </Link>                        
                    </ul>

                    <ul className="nav">
                        <Link to={'/'} className="nav-link">
                            {`Stock (${Books.length})`}
                        </Link>                       
                    </ul>                    
                </nav>
            </div>
        )
    }
};

export default connect((state) => {
    return {
        Books: state.addBooks
    }
}, {}

)(Header);