import React from "react";
import {Link} from "react-router-dom";
import logo from '../assets/image/logo.png'
import analytics from '../assets/image/analytics.png'
import book from '../assets/image/noun_Book_121819.png'
import city from '../assets/image/noun_City_1923172.png'
import file from '../assets/image/noun_File_453295.png'
import people from '../assets/image/noun_people_1923174.png'
import settings from '../assets/image/noun_Settings_1048928.png'
import {useStyles} from "../pages/theme";


export const SideMenu: React.FC = () => {
    const classes = useStyles()

    return (

        <div className={classes.sideMenu}>
            <div className={classes.sideMenuLogo}>
                <img src={logo} alt='logo'/>
            </div>
            <div className={classes.sideMenuList}>
                <Link to='/knowledgeBase'>
                    <div className={classes.sideMenuListItem}>
                        <img src={book} alt=''/>
                        <div className={classes.sideMenuListItemLabel}>База знаний</div>
                    </div>
                </Link>
                <Link to='/applications'>
                    <div className={classes.sideMenuListItem}>
                        <img src={file} alt=''/>
                        <div className={classes.sideMenuListItemLabel}>Заявки</div>
                    </div>
                </Link>
                <Link to='/staff'>
                    <div className={classes.sideMenuListItem}>
                        <img src={people} alt=''/>
                        <div className={classes.sideMenuListItemLabel}>Сотрудники</div>
                    </div>
                </Link>
                <Link to='/clients'>
                    <div className={classes.sideMenuListItem}>
                        <img src={city} alt=''/>
                        <div className={classes.sideMenuListItemLabel}>Клиенты</div>
                    </div>
                </Link>
                <Link to='/assets'>
                    <div className={classes.sideMenuListItem}>
                        <img src={analytics} alt=''/>
                        <div className={classes.sideMenuListItemLabel}>Активы</div>
                    </div>
                </Link>
                <Link to='/settings'>
                    <div className={classes.sideMenuListItem}>
                        <img src={settings} alt=''/>
                        <div className={classes.sideMenuListItemLabel}>Настройки</div>
                    </div>
                </Link>
            </div>
        </div>

    )
}