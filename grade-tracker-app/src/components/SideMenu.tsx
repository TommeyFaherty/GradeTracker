//code adapted from https://medium.com/@BartInTheField/lets-add-a-side-menu-and-a-toast-to-an-ionic-react-application-6b503955fadf

import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonIcon, IonLabel, IonItem } from "@ionic/react";
import { RouteComponentProps, withRouter } from 'react-router';

interface Page {
    title: string;
    path: string;
    icon: string;
}

const pages: Page[] = [
    { title: 'Home', path: '/', icon: 'home' },
    { title: 'Log In', path: '/tab2', icon: 'information' },  
    { title: 'Testtab3', path: '/tab3', icon: 'information' },
    { title: 'Testtab4', path: '/tab4', icon: 'information' }, 
    { title: 'Testtab3home', path: '/Home', icon: 'information'}
];

type Props = RouteComponentProps<{}>;

const SideMenu = ({ history }: Props) => {
    const [activePage, setActivePage] = useState(pages[0].title);

    const renderMenuItems = (): JSX.Element[] => {
        return pages.map((page: Page) => (
            <IonMenuToggle key={page.title} auto-hide="false">
                <IonItem button
                    color={page.title === activePage ? 'primary' : ''}
                    onClick={() => navigateToPage(page)}>
                    <IonIcon slot="start" name={page.icon}></IonIcon>
                    <IonLabel>
                        {page.title}
                    </IonLabel>
                </IonItem>
            </IonMenuToggle>
        ));
    }

    const navigateToPage = (page: Page) => {
        history.push(page.path);
        setActivePage(page.title);
    }

    return (
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Menu
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    { renderMenuItems() }
                </IonList>
            </IonContent>
        </IonMenu>
    );
}

export default withRouter(
    SideMenu
);