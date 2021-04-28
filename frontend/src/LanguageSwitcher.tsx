import React from 'react';
import {useTranslation} from "react-i18next";

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    return (
        <select value={i18n.language} selected="selected" onChange={(e) => {
            let { value} = e.target;
            i18n.changeLanguage(value);
        }}>
            <option value="en">English</option>
            <option value="fr">Francais</option>
        </select>
    );
}
