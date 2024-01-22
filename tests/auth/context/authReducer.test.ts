import { authReducer, types } from '../../../src/auth';
describe('Pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
        
    });
    
    test('debe de autenticar el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Maidy',
                id: '123'
            }
        };

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({logged: true, user: action.payload});
        
    });
    
    test('debe de borrar el usuario y el name del state', () => {

        const state = {
            logged: true,
            user: {
                name: 'Maidy',
                id: '123'
            }
        };

        const action = {
            type: types.logout
        };

        const newState = authReducer(state, action);
        expect(newState).toEqual({logged: false});
        
    });
});