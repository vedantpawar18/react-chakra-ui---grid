import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'

const Layout3 = () => {
  return (
    <div style={{display:"flex", gap:"40px"}}>
        <div style={{width:"20%"}}>
             <Grid
            h='600px'
            templateRows='repeat(7, 1fr)'
            templateColumns='repeat(1, 1fr)'
            gap={4}
            >
            <GridItem rowSpan={1} bg='yellow' />
            <GridItem rowSpan={1} bg='yellow' />
            <GridItem rowSpan={2} bg='pink' />
            <GridItem rowSpan={1} bg='blue' />
            <GridItem rowSpan={1} bg='blue' />
            </Grid>
        </div>
        <div style={{width:"20%"}}>
             <Grid
            h='600px'
            templateRows='repeat(7, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={4}
            >
            <GridItem rowSpan={2} bg='yellow' />
            <GridItem rowSpan={2} bg='yellow' />
            <GridItem rowSpan={2} colSpan={2} bg='pink' />
            <GridItem rowSpan={1} colSpan={2} bg='blue' />
            <GridItem rowSpan={1} colSpan={2} bg='blue' />
            </Grid>
        </div>

        <div style={{width:"50%"}}>
             <Grid
            h='600px'
            templateRows='repeat(7, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={4}
            >
            <GridItem rowSpan={2} colSpan={3} bg='yellow' />
            <GridItem rowSpan={2} colSpan={3} bg='yellow' />
            <GridItem rowSpan={2} colSpan={6} bg='pink' />
            <GridItem rowSpan={2} colSpan={2} bg='blue' />
            <GridItem rowSpan={2} colSpan={2} bg='blue' />
            <GridItem rowSpan={2} colSpan={2} bg='blue' />
            </Grid>
        </div>
    </div>
  )
}

export default Layout3