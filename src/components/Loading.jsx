import React, { useState, useEffect } from 'react';


const Loading = () => {
    return ( 
        <div style={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
        </div>
     );
}
 
export default Loading;