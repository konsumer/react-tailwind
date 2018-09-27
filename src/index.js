import React from 'react'
import { render } from 'react-dom'

import Button from './Button'

const Demo = () => (
  <div>
    <Button className='m-4' primary fill xl4>primary fill xl4</Button>
    <Button className='m-4' primary fill>primary fill</Button>
    <Button className='m-4' primary outline>primary outline</Button>
    <Button className='m-4' primary disabled>primary disabled</Button>
    <Button className='m-4' primary>primary </Button>
    <Button className='m-4' secondary fill>secondary fill</Button>
    <Button className='m-4' secondary outline>secondary outline</Button>
    <Button className='m-4' secondary disabled>secondary disabled</Button>
    <Button className='m-4' secondary>secondary </Button>
    <Button className='m-4' success fill>success fill</Button>
    <Button className='m-4' success outline>success outline</Button>
    <Button className='m-4' success disabled>success disabled</Button>
    <Button className='m-4' success>success </Button>
    <Button className='m-4' danger fill>danger fill</Button>
    <Button className='m-4' danger outline>danger outline</Button>
    <Button className='m-4' danger disabled>danger disabled</Button>
    <Button className='m-4' danger>danger </Button>
    <Button className='m-4' fill> fill</Button>
    <Button className='m-4' outline> outline</Button>
    <Button className='m-4' disabled> disabled</Button>
    <Button className='m-4'> none </Button>
  </div>
)

render(<Demo />, document.getElementById('root'))
