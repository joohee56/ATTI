package com.ssafy.db.entity.message;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QUserMessage is a Querydsl query type for UserMessage
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserMessage extends EntityPathBase<UserMessage> {

    private static final long serialVersionUID = -1136836781L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QUserMessage userMessage = new QUserMessage("userMessage");

    public final com.ssafy.db.entity.user.QUser fuser;

    public final ListPath<Message, QMessage> messages = this.<Message, QMessage>createList("messages", Message.class, QMessage.class, PathInits.DIRECT2);

    public final BooleanPath readInfo = createBoolean("readInfo");

    public final DateTimePath<java.util.Date> sendDate = createDateTime("sendDate", java.util.Date.class);

    public final com.ssafy.db.entity.user.QUser tuser;

    public final NumberPath<Long> userMessageId = createNumber("userMessageId", Long.class);

    public QUserMessage(String variable) {
        this(UserMessage.class, forVariable(variable), INITS);
    }

    public QUserMessage(Path<? extends UserMessage> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QUserMessage(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QUserMessage(PathMetadata metadata, PathInits inits) {
        this(UserMessage.class, metadata, inits);
    }

    public QUserMessage(Class<? extends UserMessage> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.fuser = inits.isInitialized("fuser") ? new com.ssafy.db.entity.user.QUser(forProperty("fuser"), inits.get("fuser")) : null;
        this.tuser = inits.isInitialized("tuser") ? new com.ssafy.db.entity.user.QUser(forProperty("tuser"), inits.get("tuser")) : null;
    }

}

