import { Box, Grid } from '@material-ui/core';
import './Projeto.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Projetos() {
    return (
        <>
            <div className='prj'>
                <h1>Projetos</h1>
                <p>Projetos Integradores da Generation Brasil</p>
                <a href="/adicionarprojeto"><button className="adc">Adicionar Projeto</button></a>
            </div>  
            <div className='container'>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://s3-alpha-sig.figma.com/img/744c/c21f/2309757b9f043d9e9fa9745b85809000?Expires=1674432000&Signature=FcgYdJ6c5-PqWvNJrAKY1sai851EikAL6bYZHpWjd7IrB4J5FuD-R6ukL4lx6eij8L7M8gbMwGPOZnjPeF37wd7z59QJFWcDG5cPm6HLMxGnXX9OiaR~Vnq9uT2WQfWgvd5N9RUfi7tJh378xAGxbJ3VihwuP~lU2hg-c3G-tRyky-pYKIIhJsATBDtPkwd1-BVFI~Tm1wmmHQ3YNUgUVG-zouNPiToCvXQabcc9TDuEwkS3I~7-~i~X1uipmrClfeK0SPcBEj9B2gMtUUmSkaZpz0wMu3OvwKKVH7cm7vNs7zGFOU-kKsayBJqL6S8VaT-3jOEwJ72SgzqfKzxRJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Probem
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Criando pontes entre quem pode ajudar, com quem mais precisa!

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Saiba mais</Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://s3-alpha-sig.figma.com/img/744c/c21f/2309757b9f043d9e9fa9745b85809000?Expires=1674432000&Signature=FcgYdJ6c5-PqWvNJrAKY1sai851EikAL6bYZHpWjd7IrB4J5FuD-R6ukL4lx6eij8L7M8gbMwGPOZnjPeF37wd7z59QJFWcDG5cPm6HLMxGnXX9OiaR~Vnq9uT2WQfWgvd5N9RUfi7tJh378xAGxbJ3VihwuP~lU2hg-c3G-tRyky-pYKIIhJsATBDtPkwd1-BVFI~Tm1wmmHQ3YNUgUVG-zouNPiToCvXQabcc9TDuEwkS3I~7-~i~X1uipmrClfeK0SPcBEj9B2gMtUUmSkaZpz0wMu3OvwKKVH7cm7vNs7zGFOU-kKsayBJqL6S8VaT-3jOEwJ72SgzqfKzxRJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Probem
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Criando pontes entre quem pode ajudar, com quem mais precisa!

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Saiba mais</Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://s3-alpha-sig.figma.com/img/744c/c21f/2309757b9f043d9e9fa9745b85809000?Expires=1674432000&Signature=FcgYdJ6c5-PqWvNJrAKY1sai851EikAL6bYZHpWjd7IrB4J5FuD-R6ukL4lx6eij8L7M8gbMwGPOZnjPeF37wd7z59QJFWcDG5cPm6HLMxGnXX9OiaR~Vnq9uT2WQfWgvd5N9RUfi7tJh378xAGxbJ3VihwuP~lU2hg-c3G-tRyky-pYKIIhJsATBDtPkwd1-BVFI~Tm1wmmHQ3YNUgUVG-zouNPiToCvXQabcc9TDuEwkS3I~7-~i~X1uipmrClfeK0SPcBEj9B2gMtUUmSkaZpz0wMu3OvwKKVH7cm7vNs7zGFOU-kKsayBJqL6S8VaT-3jOEwJ72SgzqfKzxRJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Probem
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Criando pontes entre quem pode ajudar, com quem mais precisa!

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Saiba mais</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
               
        </>

    )
}

export default Projetos;