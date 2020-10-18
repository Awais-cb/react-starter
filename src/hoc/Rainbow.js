import React from 'react'

// Concretely, a higher-order component is a function that takes a component and returns a new component.
const Rainbow = (WrappedComponent) => {
    const colorClasses = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']
    const textColor = colorClasses[Math.floor(Math.random() * 5)]
    const className = 'text-' + textColor
    
    // We need to return supercharged <WrappedComponent /> as newly formed function component from here instead of normal JSX returned from usual component
    // Props parameter is the props of <WrappedComponent /> passed to HOC
    return (props) => { 
        return (
            <div className={className}>
                {/* Using props passed down to <WrappedComponent /> */}
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;