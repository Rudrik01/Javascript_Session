// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

/*
Expected Output:
101
undefined
Explanation:
1. In the first call, showId.call(agent) explicitly sets the this context to the agent object. Therefore, when showId is invoked, this.id refers to agent.id, which is 101. Hence, 101 is logged to the console.
2. In the second call, showId.apply(null) sets the this context to null. In non-strict mode, this will default to the global object (window in browsers), which does not have an id property. As a result, this.id evaluates to undefined, and thus undefined is logged to the console.
Therefore, the final output consists of two lines: 101 followed by undefined.
*/