import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCat } from '../redux/Slices/filterSlice'
import Skeleton from '../components/Skeleton'

function Home() {
  const [items, setItems] = useState([])
  const activeCat = useSelector((state) => state.filter.activeCat)
  const activeSort = useSelector((state) => state.filter.sort)
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  const onChangeCategory = (id) => {
    dispatch(setActiveCat(id))
  }

  useEffect(() => {
    setIsLoading(true)
    const category = activeCat > 0 ? `&category=${activeCat}` : ''
    const sort = `?sortBy=${activeSort.sortProperty}&order=desc`
    fetch(`https://640f5af14ed25579dc4d0528.mockapi.io/items${sort}${category}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
      })
    if (items.length > 0) {
      setIsLoading(false)
    }
  }, [activeCat, activeSort, items.length])

  return (
    <div className="content ">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCat={activeCat}
            onChangeCategory={onChangeCategory}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
            : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  )
}
export default Home
