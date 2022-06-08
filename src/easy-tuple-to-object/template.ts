/**
 * [P in keyof T] : P  得到的是数组下标
 * [P in T[number]]:P  得到的是数组值的集合
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]:P
}

/**
 *
 * as const 是把左侧值转变ts readonly ["tesla","model 3"], 如果不使用则是ts string[]
 */
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

/**
 * <typeof tuple>把js代码转换ts类型
 */
type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}