module Motor where

type Motor = {}

foreign import motor :: String -> Motor
foreign import run :: Motor -> Int -> String
foreign import stop :: Motor -> String
