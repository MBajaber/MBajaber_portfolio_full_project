import React, { useContext } from 'react';
import { MyContext } from '../../Context/context';
import { PageNotFoundStyled } from './404PageStyled';

function NotFoundPage() {
    const context = useContext(MyContext);
    console.log(context);
    return (
        <PageNotFoundStyled theme={context.theme} themeStyle={context.themeStyle} >
            <div className="img-box">
                <img src={process.env.PUBLIC_URL + '404/404_page.png'} alt="404 Page Not Found" />
                <h3>Page Not Found</h3>
            </div>
        </PageNotFoundStyled>
    )
}

export default NotFoundPage
