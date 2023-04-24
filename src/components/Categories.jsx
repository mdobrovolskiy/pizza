function Categories({ activeCat, onChangeCategory }) {
  const catNames = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]
  return (
    <div className="categories">
      <ul>
        {catNames.map((cat, i) => (
          <li
            key={i}
            className={`${activeCat === i ? 'active' : ''}`}
            onClick={() => onChangeCategory(i)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Categories
