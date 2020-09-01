import React, {useState, useEffect, useLayoutEffect } from 'react'
import { Container, Grid, Paper } from '@material-ui/core';

const Game = () => {
    const [ grid, setGrid ] = useState([]);
    const LEVEL = 1;
    const GRID_SIZE = 18 + LEVEL * 6;

    useLayoutEffect(() => {
        setGrid(getPokeLocation);
        // get pokemon
        // get questions
    },[LEVEL]);

    const getPokeLocation = () => {
        let spots = [];
        for (let i = 0; i < LEVEL * 4; i++) {
            let random = Math.floor(Math.random() * Math.floor(GRID_SIZE));
            const removeDuplicates = () => {
                if ( spots.includes(random) ) { 
                    random = Math.floor(Math.random() * Math.floor(GRID_SIZE));
                    removeDuplicates();
                }
            }
            removeDuplicates();
            spots.push(random);
        }
        return spots;
    }

    return (
        <div className='game-page'>
            <Container>
                <h1>Pokequiz</h1>
                <Grid container className="grass-grid" spacing={0}>
                    { [...Array(GRID_SIZE)].map((e, i) => {
                        return ( 
                            <Grid item xs={2}
                                className="grid-cell" 
                                contains-pokemon={ grid.includes(i) } 
                                id={`grid-cell-${i}`} 
                                key={i}
                            >
                                <Paper>{ grid.includes(i) ? i : 'Empty' }</Paper>
                            </Grid>
                        ) 
                        })  
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Game;
