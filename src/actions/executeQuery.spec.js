import { executeQueryAction } from './executeQuery';
import githubSchema from '../fixtures/githubSchema';

it("dispatches error actions on error", () => {
  const thunk = executeQueryAction("node", {id: "abc"});
  const dispatchMock = jest.fn();
  const getStateMock = () => {
    return { graphql: { schema: githubSchema } };
  };
  const queryMock = jest.fn();
  const thenMock = jest.fn();
  queryMock.mockReturnValueOnce({ then: thenMock });
  const clientMock = {
    query: queryMock
  };
  thunk(dispatchMock, getStateMock, clientMock);
  expect(thenMock.mock.calls.length).toEqual(1);
  const successHandler = thenMock.mock.calls[0][0];
  successHandler({data: { node: {} }});
  expect(dispatchMock.mock.calls.length).toEqual(1);
  const errorHandler = thenMock.mock.calls[0][1];
  errorHandler({});
  expect(dispatchMock.mock.calls.length).toEqual(2);
});
