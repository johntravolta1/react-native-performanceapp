

inicialização: expo start
server: yarn server
rodar dev-tools: react-devtools


dev-tools: instalação: yarn global add react-devtools

>> erro de não detectar typescript no expo start: 
It looks like you're trying to use TypeScript butdon't have the required dependencies installed. 
yarn add --dev @types/react@17.0.21 ( dica de uma resposta stackoverflow)


memo: compara o estado anterior com o posterior e permite colocar uma lógica que só renderiza novamente se for diferentes (se a igualdade for falsa)
useMemo: guarda, por exemplo, o resultado de um cálculo, e só calcula novamente se as variáveis do cálculo forem diferentes
useCallback: guarda uma função. Quando passamos uma função pra um componenente, o javascript vai criar uma função de callback por debaixo dos panos.
Quando essa função é passada entre vários componentes (prop drilling), isso pode causar várias renderizações. Ao utilizarmos useCallback, evitamos isso pois ele vai guardar essa função e, vao ver que está sendo chamada a mesma função, não irá renderizar o componente novamente.

dicas de performance:
1- Se forem muitos itens na lista, flatlist é bem mais performática do que a scrollview, pois ele renderiza apenas os elementos que cabem na tela
2- fazer cálculos fora dos componentes de renderização, antes do return dos componentes
3- analisar o bundle gerado com '$ yarn add --dev react-native-bundle-visualizer'