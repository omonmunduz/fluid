import React from 'react'
import ImageText from '../../components/atoms/image-text/image-text';

export const Contact = () => {
  const imageTextProps = {
    image: 'https://via.placeholder.com/150',
    text: 'Lorem ipsum dolor sit amet con. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet con. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    title: 'Contact Us',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    textPos: 'top',
  }
  return (
    <div>
      <h1>Contacts</h1>
      <ImageText 
        image={imageTextProps.image}
        text={imageTextProps.text}
        title={imageTextProps.title}
        subtitle={imageTextProps.subtitle}
        textPos={imageTextProps.textPos}
      />
      <ImageText 
        image={imageTextProps.image}
        text={imageTextProps.text}
        title={imageTextProps.title}
        subtitle={imageTextProps.subtitle}
        textPos={'left'}
      />
      <ImageText 
        image={imageTextProps.image}
        text={imageTextProps.text}
        title={imageTextProps.title}
        subtitle={imageTextProps.subtitle}
        textPos={'right'}
      />
    </div>
  )
}
