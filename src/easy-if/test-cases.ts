import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
    Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'> // https://yayujs.com/reference/TypeCompatibility.html#%E7%B1%BB%E5%9E%8B%E5%85%BC%E5%AE%B9%E6%80%A7 需要开启严格模式, tsconfig.json -> strict : true
