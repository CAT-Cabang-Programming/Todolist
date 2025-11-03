import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import MainLayout from '../layout/MainLayout';
import Add from '../component/Add'
import Mark from '../component/mark';

function Home (){
    return(
       <MainLayout>
        <Mark/>
       </MainLayout>
    )
}
export default Home