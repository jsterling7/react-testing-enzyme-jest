import BowlingGame from "./BowlingGame";

describe('A simple bowling game', () => {
    let game

    beforeEach(() => {
        game = new BowlingGame()
    })

    describe('#roll', () => {

        describe('when the number of pins is valid', () => {
            it('allows you to pass number of pins knocked down', () => {
                game.roll(123)
            })

            it('allow you to roll and get score', () => {
                game.roll(1)

                expect(game.score()).toEqual(1)
            })

            it('allow you to roll and get score', () => {
                game.roll(10)

                expect(game.score()).toEqual(10)
            })

            it('allow you to roll 0 and get zero', () => {
                game.roll(1)
                game.roll(0)

                expect(game.score()).toEqual(1)
            })
        })

        describe('when the number of pins is invalid', () => {
            it('blows up when passed negative infinity', () => {
                game.roll(-Infinity)

                expect(game.score()).toEqual(0)
            })

            it('blows up when passed positive infinity', () => {
                game.roll(Infinity)

                expect(game.score()).toEqual(0)
            })

            it('blows up when passed positive infinity', () => {
                game.roll(1)
                game.roll(Infinity)

                expect(game.score()).toEqual(0)
            })
        })
    })

    describe('#score', () => {
        it('when rolling multiple balls, gives you an accurate score', () => {

            game.roll(1)
            game.roll(1)

            expect(game.score()).toEqual(2)
        })
    })
})