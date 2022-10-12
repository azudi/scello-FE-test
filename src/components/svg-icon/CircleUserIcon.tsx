import React from 'react'

interface Props {
    width: string | number | undefined,
}

function CircleUserIcon(props: Props) {
    const { width } = props

    return (
        <svg width={width} height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.16" cx="50" cy="50" r="50" fill="#213F7D"/>
        <path d="M36.0405 65.1796C36.4796 62.2202 37.7936 59.6264 39.9796 57.4C42.7405 54.6 46.0732 53.2 49.9796 53.2C53.886 53.2 57.2204 54.6 59.9796 57.4C62.1796 59.6266 63.5062 62.2204 63.9593 65.1796M58.1405 44.0204C58.1405 46.247 57.3468 48.1532 55.7593 49.7408C54.1734 51.3408 52.253 52.1408 50.0001 52.1408C47.7594 52.1408 45.8409 51.3408 44.2409 49.7408C42.6534 48.1533 41.8596 46.247 41.8596 44.0204C41.8596 41.7673 42.6534 39.8468 44.2409 38.2596C45.8409 36.6737 47.7596 35.8799 50.0001 35.8799C52.2532 35.8799 54.1737 36.6737 55.7593 38.2596C57.3468 39.8471 58.1405 41.7674 58.1405 44.0204Z" stroke="#213F7D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default CircleUserIcon
