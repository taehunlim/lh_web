import React, {Fragment} from 'react';
import {Container} from 'reactstrap';

import FooterLink from "./footer-link";

const Footer = () => {
    return (
        <Fragment>
            <footer className="landing-footer">
                <Container>
                    <FooterLink/>
                </Container>
            </footer>
        </Fragment>
    );
};

export default Footer;
