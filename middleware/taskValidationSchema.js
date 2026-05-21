
const id = {
    id: {
        in: ["params"],
        isInt: {
            errorMessage: "Task id must be a integer"
        },
        toInt: true
    }
}

const taskNameInput = {
    taskName: {
        in: ["body"],
        trim: true,
        notEmpty: {
            errorMessage: "Task name must not be empty"
        },
        matches: {
            options: /^[a-zA-Z0-9 ]+$/,
            errorMessage: "Task name must contain only letters and spaces"
        },
        isLength: {
            options: { min: 3, max: 80 },
            errorMessage: "Task name must be between 3 and 80 characters"
        }
    }
}

const assigneeNameInput = {
    assigneeName: {
        in: ["body"],
        trim: true,
        notEmpty: {
            errorMessage: "Assignee name must not be empty"
        },
        matches: {
            options: /^[a-zA-Z ]+$/,
            errorMessage: "Assignee name must contain only letters and spaces"
        },
        isLength: {
            options: { min: 3, max: 80 },
            errorMessage: "Assignee name must be between 3 to 80 characters "
        }
    }
}

const assigneeEmailInput = {
    assigneeEmail: {
        in: ["body"],
        trim: true,
        notEmpty: {
            errorMessage: "Assignee email must not be empty"
        },
        isEmail : {
            errorMessage : "Invalid email provided"
        }
    }
}

const dueDateInput = {
    dueDate: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Due date must not be empty"
        }
    }
}

const dueTimeInput = {
    dueTime: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Due time must not be empty "
        }
    }
}

const hoursInput = {
    hours: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Hours must not be empty"
        },
        isInt: {
            options: { min: 1, max: 2000 },
            errorMessage: "Hour must be between 1 to 2000 hours"
        },
        toInt: true
    }
}

const urlInput = {
    url: {
        in: ["body"],
        trim: true,
        notEmpty: {
            errorMessage: "URL must not be empty"
        },
        isURL: {
            errorMessage : "Invalid URL provided"
        }
    }
}

const descriptionInput = {
    description: {
        in: ["body"],
        trim: true,
        notEmpty: {
            errorMessage: "Description must not be empty"
        },
        matches: {
            options: /^[a-zA-Z0-9\s]+$/,
            errorMessage: "Description must include only letters, numbers and spaces "
        },
        isLength: {
            options: { min: 1, max: 5000 },
            errorMessage: "Description length must be 1 to 5000 characters"
        }
    }
}

const progressInput = {
    progress: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Progress must not empty"
        },
        isInt: {
            options: { min: 0, max: 100 },
            errorMessage: "Progress should be 0 to 100"
        },
        toInt: true
    }
}

const priorityInput = {
    priority: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Priority must not be empty"
        },
        isIn: {
            options: [["low", "medium", "high"]],
            errorMessage: "Priority must be low, medium or high"
        }
    }
}

const taskTypeInput = {
    taskType: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Task type should not be empty"
        },
        isArray : {
            errorMessage : "Task type must be an array"
        }
    }
}

const statusTypeInput = {
    statusType: {
        in: ["body"],
        notEmpty: {
            errorMessage: "Status must not be empty"
        }
    }
}


const getByIdVS = {
    ...id
}

const postTaskVS = {
    ...taskNameInput,
    ...assigneeNameInput,
    ...assigneeEmailInput,
    ...dueDateInput,
    ...dueTimeInput,
    ...hoursInput,
    ...urlInput,
    ...descriptionInput,
    ...progressInput,
    ...priorityInput,
    ...taskTypeInput,
    ...statusTypeInput
}

const putTaskVS = {
    ...id,
    ...taskNameInput,
    ...assigneeNameInput,
    ...assigneeEmailInput,
    ...dueDateInput,
    ...dueTimeInput,
    ...hoursInput,
    ...urlInput,
    ...descriptionInput,
    ...progressInput,
    ...priorityInput,
    ...taskTypeInput,
    ...statusTypeInput
}

const patchTaskVS = {
    ...id,
    taskName: {
        ...taskNameInput.taskName,
        optional: true
    },
    assigneeName: {
        ...assigneeNameInput.assigneeName,
        optional: true
    },
    assigneeEmail: {
        ...assigneeEmailInput.assigneeEmail,
        optional: true
    },
    dueDate: {
        ...dueDateInput.dueDate,
        optional: true
    },
    dueTime: {
        ...dueTimeInput.dueTime,
        optional: true
    },
    hours: {
        ...hoursInput.hours,
        optional: true
    },
    url: {
        ...urlInput.url,
        optional: true
    },
    description: {
        ...descriptionInput.description,
        optional: true
    },
    progress: {
        ...progressInput.progress,
        optional: true
    },
    priority: {
        ...priorityInput.priority,
        optional: true
    },
    taskType: {
        ...taskTypeInput.taskType,
        optional: true
    },
    statusType: {
        ...statusTypeInput.statusType,
        optional: true
    }
}

const deleteTaskVS = {
    ...id
}

module.exports = { getByIdVS, postTaskVS, putTaskVS, patchTaskVS, deleteTaskVS }