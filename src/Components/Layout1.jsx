import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'

const Layout1 = () => {
  return (
    <div style={{display:"flex", marginTop:"60px",margin:"auto", gap:"20px"}}>
      <h1></h1>
         <div style={{width:"60%"}}>
           <Grid templateColumns='repeat(6, 1fr)' gap={0}>
            <GridItem colSpan={2} h='390' bg='blue' />
            <GridItem colSpan={2} h='390' bg='orange' />
            <GridItem colSpan={2} h='390' bg='red' />
           </Grid>
         </div>
        <div style={{width:"30%"}}>
        <Grid templateRows='repeat(6, 1fr)' gap={0}>
                <GridItem colSpan={2} h='130' bg='blue' />
                <GridItem colSpan={2} h='130' bg='orange' />
                <GridItem colSpan={2} h='130' bg='red' />
              </Grid>
        </div>
    </div>
   
  )
}

export default Layout1