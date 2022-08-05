package com.ssafy.db.entity.depart;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QComment is a Querydsl query type for Comment
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QComment extends EntityPathBase<Comment> {

    private static final long serialVersionUID = -2077090201L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QComment comment = new QComment("comment");

    public final BooleanPath commentAnoInfo = createBoolean("commentAnoInfo");

    public final StringPath commentContent = createString("commentContent");

    public final BooleanPath commentDeleteInfo = createBoolean("commentDeleteInfo");

    public final NumberPath<Integer> commentGroup = createNumber("commentGroup", Integer.class);

    public final NumberPath<Long> commentId = createNumber("commentId", Long.class);

    public final NumberPath<Integer> commentLevel = createNumber("commentLevel", Integer.class);

    public final DateTimePath<java.util.Date> commnetRegDate = createDateTime("commnetRegDate", java.util.Date.class);

    public final QPost post;

    public final BooleanPath seq = createBoolean("seq");

    public final com.ssafy.db.entity.user.QUser user;

    public final ListPath<UserCommentLike, QUserCommentLike> usercommentlikes = this.<UserCommentLike, QUserCommentLike>createList("usercommentlikes", UserCommentLike.class, QUserCommentLike.class, PathInits.DIRECT2);

    public final ListPath<UserCommentMention, QUserCommentMention> usercommentmentions = this.<UserCommentMention, QUserCommentMention>createList("usercommentmentions", UserCommentMention.class, QUserCommentMention.class, PathInits.DIRECT2);

    public QComment(String variable) {
        this(Comment.class, forVariable(variable), INITS);
    }

    public QComment(Path<? extends Comment> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QComment(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QComment(PathMetadata metadata, PathInits inits) {
        this(Comment.class, metadata, inits);
    }

    public QComment(Class<? extends Comment> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.post = inits.isInitialized("post") ? new QPost(forProperty("post"), inits.get("post")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
    }

}

