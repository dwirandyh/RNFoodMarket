const formatNumber = (value: number) => {
    return value.toLocaleString('id-ID', { minimumFractionDigits: 0 })
}

export default formatNumber