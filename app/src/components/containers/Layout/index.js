import React, { Component } from 'react'
import ResizableGrid from '../ResizableGrid'
import OriginalPage from '../OriginalPage'
import './style.scss'

export default class Layout extends Component {
  render () {
    return (
      <div className='layout'>
        <ResizableGrid
          // childrenTitles={['Test', 'Hello', 'World']}
          isHorizontal
          template='100px auto'
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facilis consequatur consectetur porro vitae, quaerat commodi neque aliquam dolorum. Debitis molestiae numquam consequatur ipsa recusandae, quod iusto quibusdam veritatis officiis?</p>

          <div className='html-content'>
            <OriginalPage />
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minus laborum sapiente, omnis expedita tempore optio sed fugit possimus ab pariatur consectetur recusandae hic reiciendis voluptatum perferendis totam soluta nihil nemo ipsum fugiat explicabo nesciunt molestiae? Alias veniam illum quisquam libero corrupti ex consequatur voluptas repudiandae debitis dolore neque eligendi cum adipisci enim, labore in minima? Voluptatum, eligendi cum. Debitis?</p>
        </ResizableGrid>
      </div>
    )
  }
}
