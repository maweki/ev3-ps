module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)
import Motor (motor, run)

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = do
  log $ run (motor "B") 100
