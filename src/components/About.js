import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = (props) => {
    return (
        <div className="container">
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ipsum felis, accumsan quis tortor eu, facilisis faucibus est. Mauris lobortis mattis tortor ac gravida. Morbi sit amet ligula enim. Sed iaculis metus et elit congue varius. Cras id commodo neque. Aenean pharetra dolor nibh, vitae convallis neque tempor in. Sed bibendum nulla tellus, in semper lacus fermentum quis. In pulvinar, ex quis elementum porttitor, quam dolor interdum justo, feugiat fringilla ipsum lectus et est. Integer ultricies felis urna, nec consequat leo laoreet at. Cras semper metus in massa pretium, non convallis dui rutrum. Quisque velit eros, faucibus et feugiat eu, egestas non dui. In hac habitasse platea dictumst. Quisque nec diam molestie, tristique nisi non, sodales turpis. Phasellus sagittis erat vitae mauris efficitur, quis porttitor elit condimentum. Nam scelerisque ante fermentum quam molestie, vitae pretium tortor elementum.
            </p>
        </div>
    )
}

export default Rainbow(About);