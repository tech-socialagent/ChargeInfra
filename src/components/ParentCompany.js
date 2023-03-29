import React from 'react';
import Data from '../Data.json';
import '../stylesheets/ParentCompany.css';

function ParentCompany() {
  return (
    <section className="parent_company_main"> 
    <div className='parent_company_left'>
        <img src={require('../assets/parent_company/' + Data.parent_company.parent_company_pic)} alt=""/>
    </div>
    <div className='parent_company_right'>
        <h1 className='parent_company_heading'>{Data.parent_company.parent_company_heading}</h1>
        <p className='parent_company_title'>{Data.parent_company.parent_company_title}</p>
        <p className='parent_company_desc'>{Data.parent_company.parent_company_desc}</p>
        <p className='parent_company_know_more'>Want to know about our <span className='EMI_yellow_text'>parent company</span>?</p>
        <button className='parent_company_logo_btn'>
            <img src={require('../assets/parent_company/'+Data.parent_company.parent_company_logo_btn)} alt=""/>
            </button>
    </div>
    </section>
  )
}

export default ParentCompany
