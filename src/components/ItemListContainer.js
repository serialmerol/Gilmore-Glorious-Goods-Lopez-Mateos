import ItemList from './ItemList';
const styles = {
    header:"text-3xl font-extrabold underline text-primary",
  }
const ItemListContainer = (props) => {
    return(
        <div>
            <h1 className={styles.header}>Welcome Intrepid {props.job}</h1>
            <ItemList/>
        </div>
    )
};

export default ItemListContainer