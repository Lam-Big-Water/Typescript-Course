import { ReactNode, useCallback } from 'react';
import './App.css';

const App = () => {
  const onListClick = useCallback((item: string) => {
    alert(item)
  }, []);

  return (
    <div>
      <Heading title='Introducing' />
      <Box>
        Hello Typescript & React
      </Box>

      <List items={['one', 'two', 'three']} onClick={onListClick}/>
    </div>

  )
}

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>

const Box = ({ children }: { children: ReactNode }) => <div style={{ padding: '1rem', fontWeight: 'bold' }}>{children}</div>

const List: React.FC<{
  items: string[];
  onClick?: (item: string) => void;
}> = ({items, onClick}) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>{item}</li>
    ))}
  </ul>
)

// const List = ({items}: {items:string[]}) => (
//   <ul>
//     {items.map((item, index) => (
//       <li key={index}>{item}</li>
//     ))}
//   </ul>
// )

export default App