import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'

const Layout2 = () => {
  return (
    <div style={{margin:"auto", display:"flex", gap:"40px"}}>
      <div style={{width:"30%"}}>
      <Grid
        h='400px'
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(1, 1fr)'
        gap={4}
        >
        <GridItem colSpan={2} bg='blue' />
        <GridItem colSpan={2} bg='orange' />
        <GridItem colSpan={2} bg='red' />
    </Grid>
      </div>
      <div style={{width:"50%"}}>
                <Grid
            templateAreas={`"header header main"
                            "header header main"
                            "nav nav main"`}
            gridTemplateRows={'3, 1fr'}
            gridTemplateColumns={'3,1fr'}
            h='400px'
            gap='4'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <GridItem pl='0' bg='blue' area={'header'}>
                {/* Header */}
            </GridItem>
            <GridItem pl='0' bg='orange' area={'nav'}>
                {/* Nav */}
            </GridItem>
            <GridItem pl='0' bg='red' area={'main'}>
                {/* Main */}
            </GridItem>
            {/* <GridItem pl='2' bg='blue.300' area={'footer'}>
                Footer
            </GridItem> */}
            </Grid>
      </div>
    </div>
  )
}

export default Layout2