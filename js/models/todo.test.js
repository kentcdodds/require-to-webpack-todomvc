var Todo = require('./todo')

describe('todo', function() {
  it('should default with an empty title and incomplete', function() {
    var newTodo = new Todo()
    expect(newTodo.get('title')).to.equal('')
    expect(newTodo.get('completed')).to.be.false
  })

  it('should be able to toggle the complete state', function() {
    var newTodo = new Todo()
    newTodo.save = sinon.spy()
    newTodo.toggle()
    expect(newTodo.save).to.have.been.calledWith({completed: true})
  })
})

