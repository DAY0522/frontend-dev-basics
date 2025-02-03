console.log('===[Test: Unnamed Export Module]'); // Unnamed Export Module Import 에서은 반드시 이름을 지정해야 한다.
console.log('===[Test: Named Export Module I]'); // Named Export 모듈의 다수 객체 Destrcting Import
console.log('===[Test: Named Export Module II]'); // Named Export Module은 다수의 객체를 Export 하기 때문에 Import 할 때 특정 이름을 지정할 수 없다. 대신, '* as 이름' 를 사용할 수 있다.
console.log('===[Test: Named + Unamed Export Module]')
