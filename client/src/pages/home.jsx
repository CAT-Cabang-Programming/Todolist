import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import MainLayout from '../layout/MainLayout';
import Add from '../component/Add'

function Home (){
    return(
       <MainLayout>
        <Add/>
       </MainLayout>
    )
}
export default Home