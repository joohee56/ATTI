package com.ssafy.db.entity.chat;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QChat is a Querydsl query type for Chat
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QChat extends EntityPathBase<Chat> {

    private static final long serialVersionUID = -58588436L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QChat chat = new QChat("chat");

    public final BooleanPath answerInfo = createBoolean("answerInfo");

    public final QChatCategory chatcategory;

    public final StringPath chatContent = createString("chatContent");

    public final NumberPath<Long> chatId = createNumber("chatId", Long.class);

    public final QChatRoom chatroom;

    public final com.ssafy.db.entity.user.QUser user;

    public final DateTimePath<java.util.Date> writeDate = createDateTime("writeDate", java.util.Date.class);

    public QChat(String variable) {
        this(Chat.class, forVariable(variable), INITS);
    }

    public QChat(Path<? extends Chat> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QChat(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QChat(PathMetadata metadata, PathInits inits) {
        this(Chat.class, metadata, inits);
    }

    public QChat(Class<? extends Chat> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.chatcategory = inits.isInitialized("chatcategory") ? new QChatCategory(forProperty("chatcategory")) : null;
        this.chatroom = inits.isInitialized("chatroom") ? new QChatRoom(forProperty("chatroom"), inits.get("chatroom")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

